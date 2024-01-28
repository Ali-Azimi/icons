import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.resolve('icons', ...slug);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'SVG not found' });
    return;
  }

  const svgContent = fs.readFileSync(filePath, 'utf-8');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svgContent);
}
