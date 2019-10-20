export const formatQueryResults = results =>
  results
    .map(document => ({
      id: document.id,
      ...document.data()
    }))
    .reverse();
