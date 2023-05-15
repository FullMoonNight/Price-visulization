export const createDataset = (
  func: (m: number) => number,
  axis: number,
  step: number = 1,
  minAsix: number = 0,
): { labels: string[]; dataset: number[] } => {
  const labels = [];
  const dataset = [];
  for (let i = minAsix; i < axis; i += step) {
    labels.push(i.toString());
    dataset.push(func(i));
  }

  return { dataset, labels };
};
