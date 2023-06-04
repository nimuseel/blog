interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: any;
}

export const pageView = (url: URL) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
