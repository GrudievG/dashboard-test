const dataService = {
  getEvents: async () => {
    try {
      const response = await fetch('/dashboard-test/db/eventsList.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  getEventById: async (id: string) => {
    try {
      const response = await fetch(`/dashboard-test/db/${id}.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default dataService;