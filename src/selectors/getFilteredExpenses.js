import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAt = moment(expense.createdAt);

        const start = startDate ? createdAt.isSameOrAfter(startDate, 'day') : true;
        const end = endDate ? createdAt.isSameOrBefore(endDate, 'day') : true;
        const match = expense.description.toLowerCase().includes(text.toLowerCase());
        return start && end && match;

    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}