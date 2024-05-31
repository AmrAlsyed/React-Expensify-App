import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    console.log('text',text)
    const createdAtMoment = moment(expense.createdAt);
    const startDateMoment = moment(startDate)
    const endDateMoment = moment(endDate)
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
