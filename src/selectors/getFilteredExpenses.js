export default (expenses, filters) => {
    return expenses.filter(expense => {
        const afterStart = filters.startDate.isBefore(expense.createdAt);
        const beforeEnd = filters.endDate.isAfter(expense.createdAt);
        const containsText = expense.description.toLowerCase().includes(filters.text.toLowerCase());

        return afterStart && beforeEnd && containsText;
    }).sort((a, b) => {
        if(filters.sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(filters.sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}