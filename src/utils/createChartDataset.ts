export const createDataset = (
  func: (m: number) => number,
  axis: number,
  step: number = 1
): { labels: string[]; dataset: number[] } => {
  const labels = [];
  const dataset = [];
  for (let i = 0; i < axis / step; i += step) {
    labels.push(i.toString());
    dataset.push(func(i));
  }

  return { dataset, labels };
};
