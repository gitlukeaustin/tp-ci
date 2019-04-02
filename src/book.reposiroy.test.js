const BookRepository = require('./book.repository');
const TrueDB = require('./db.js');
const real = new BookRepository(TrueDB);

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });

    test('Test get total book count',() => {

        const dbMock = {
            get:jest.fn(),
            size:jest.fn(),
            value:jest.fn()
        }

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(5);

        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toEqual(5);
        expect(dbMock.get.mock.calls.length).toBe(1);

    });
});