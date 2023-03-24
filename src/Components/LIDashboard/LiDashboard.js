import React from 'react'
import './LiDashboard.css'
function LiDashboard() {
  return (
    <div className='body'>
        
         <header>
      <h1>Document Approval Page</h1>
    </header>
    <section>
      <h2>Document List</h2>
      <table>
        <tr>
          <th>Document Name</th>
          <th>Author</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Document 1</td>
          <td>John Doe</td>
          <td>March 22, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
        <tr>
          <td>Document 2</td>
          <td>Jane Doe</td>
          <td>March 23, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
        <tr>
          <td>Document 3</td>
          <td>James Smith</td>
          <td>March 24, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
      </table>
    </section>
    <footer>
      <p>&copy; 2023 Document Approval Page. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default LiDashboard