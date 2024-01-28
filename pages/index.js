import { glob } from 'glob';
import dynamic from 'next/dynamic';
import path from 'path';
import classes from './index.module.css';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const svgFiles = glob.sync(
    path.resolve(process.cwd(), './public/icons/*.js'),
  );

  const svgComponentNames = svgFiles.map((file) => path.basename(file, '.js'));
  return {
    props: {
      svgComponentNames,
    },
  };
}

export default function Home({ svgComponentNames }) {
  const [state, setState] = useState(null);
  const [search, setSearch] = useState('');
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const svgComponents = svgComponentNames.reduce((acc, componentName) => {
      acc[componentName] = dynamic(() =>
        import(`@/public/icons/${componentName}`),
      );
      return acc;
    }, {});
    setIcons(svgComponents);
  }, []);

  const handleIconSelect = (index, SvgComponent) => {
    setState({
      title: svgComponentNames[index],
      icon: <SvgComponent width={94} height={94} />,
    });
  };

  const handleCopy = (title) => {
    navigator.clipboard.writeText(title);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filtered = svgComponentNames.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase()),
    );

    const filteredSvgs = filtered.reduce((acc, componentName) => {
      acc[componentName] = dynamic(() =>
        import(`@/public/icons/${componentName}`),
      );
      return acc;
    }, {});
    debugger;
    setIcons(filteredSvgs);
  };
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.heading}>
          Lighthouse Icons{' '}
          <span className={classes.count}>({Object.values(icons).length})</span>
        </h1>
        <input
          placeholder="search in icons..."
          onChange={handleChange}
          value={search}
          className={classes.input}
        />
      </header>
      <main className={classes.main}>
        <section className={classes.iconList}>
          {Object.values(icons).map((SvgComponent, index) => (
            <div
              key={index}
              className={classes.icon}
              onClick={() => handleIconSelect(index, SvgComponent)}
            >
              <SvgComponent width={48} height={48} />
            </div>
          ))}
        </section>
        <section className={classes.showCase}>
          <h3>Selected Icon</h3>
          {state ? (
            <div className={classes.selectedIcon}>
              {state?.icon}
              <span
                className={classes.title}
                onClick={() => handleCopy(state.title)}
              >
                {state?.title}{' '}
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 111.07 122.88"
                  width={16}
                  height={16}
                  style={{ marginLeft: '8px' }}
                  fill="#24b4ff"
                >
                  <g>
                    <path
                      class="st0"
                      d="M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28 v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02 c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02 c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19 c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17 c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z M100.91,109.49V34.2v-0.02h0.02 c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97 c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01 h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49 L100.91,109.49z"
                    />
                  </g>
                </svg>
              </span>
            </div>
          ) : (
            <p>please select your icon</p>
          )}
        </section>
      </main>
    </>
  );
}
