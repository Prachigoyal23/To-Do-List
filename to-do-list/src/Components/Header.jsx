import '../index.css';

function Header({ date, activeCount }) {
  return (
    <header className="header">
      <h1>TO DO LIST</h1>
      <div className='side-header'>
        <h3>{date}</h3>
        <h3>Active Tasks: {activeCount}</h3>
      </div>
      
    </header>
  );
}

export default Header;