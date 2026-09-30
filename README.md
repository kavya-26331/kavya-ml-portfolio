# kavya-ml-portfolio

A dark-first, responsive portfolio for Kavya Sri Marripudi, a junior ML engineer. It leads with four live, deployed ML projects (RoadGuard AI, Walmart Sales Forecasting, Telecom Churn Prediction, Dynamic Pricing) and a hero built around a forecast-with-uncertainty chart.

Built with Next.js 14 (App Router) and Tailwind CSS. No environment variables or external services are needed.

## Run locally

```bash
npm install && npm run dev
```

Open http://localhost:3000. To check a production build, run `npm run build && npm start`.

## Structure

- `app/`: layout, global styles and theme tokens, and the page.
- `components/`: one file per section, plus the theme toggle and hero chart.
- `data/profile.js`: all copy, links and project data. Edit here to update the site.
- `public/profile.jpg`: portrait.

## Notes

- Metrics are limited to figures from the resume (churn ROC-AUC of about 0.83, CGPA 8.51). Add measured results for the other projects in `data/profile.js` as you have them.
- Light and dark themes share CSS variables in `app/globals.css`.
