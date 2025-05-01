import React, {useState} from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
    {id: 3, name: 'Peter Jones', email: 'peter.jones@example.com'},
    {id: 4, name: 'Alice Brown', email: 'alice.brown@example.com'},
    {id: 5, name: 'Bob Green', email: 'bob.green@example.com'},
    {id: 6, name: 'Carol White', email: 'carol.white@example.com'},
    {id: 7, name: 'David Black', email: 'david.black@example.com'},
    {id: 8, name: 'Eve Grey', email: 'eve.grey@example.com'},
    {id: 9, name: 'Frank Blue', email: 'frank.blue@example.com'},
    {id: 10, name: 'Grace Red', email: 'grace.red@example.com'},
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [filterText, setFilterText] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()) ||
    user.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4">
      <h2>Users</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by name or email"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {currentUsers.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Users;