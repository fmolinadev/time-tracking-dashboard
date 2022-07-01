const viewDaily = (payload) => {
  return {
    type: "SET_DAILY",
    payload,
  };
};
const viewWeekly = (payload) => {
  return {
    type: "SET_WEEKLY",
    payload,
  };
};

const viewMonthly = (payload) => {
  return {
    type: "SET_MONTHLY",
    payload,
  };
};

export { viewDaily, viewWeekly, viewMonthly };
