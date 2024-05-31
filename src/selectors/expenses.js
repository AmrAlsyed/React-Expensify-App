import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    
    const createdAtMoment = moment(expense.createdAt);
    const startDateMoment = startDate ? moment(startDate) : null;
    const endDateMoment = endDate ? moment(endDate) : null;
    const startDateMatch = startDateMoment ? startDateMoment.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDateMoment ? endDateMoment.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
