# atlan-frontend-sql
 - A Front-End web application in **React**, able to acept SQL queries and show results of the executed query.
 - Two window view - one for editor other for result of the query.
 - Syntax highlighting.
 - Multi-tab query window with feature of deleting tab, adding more tab(s), toggle between tab(s)
 - Toggle fullscreen in any side editor/table for ease of access
 - Pagination for **large data**.

### Technologies Used:
 - <a href="https://reactjs.org/">React</a> - JavaScript FrameWork
 - <a href="https://mui.com/material-ui/getting-started/overview/">Material UI v5.8.4</a> - UI Library
 - <a href="https://github.com/d3/d3-fetch">d3-fetch</a> - For parsing CSVs
 - <a href="#"> CodeMirror </a> - For code editor component for the web with features like line gutters, syntax highlighting, and autocompletion


### Page Load Time: 806ms
  - Measured using Google Chrome Dev Tools - Performance Tab.

### Peformace Optimizations:
 - Using **Paginated Table** to render large data improved performance by reducing loading time of overall app, improved user experience, and also **prevented from breaking the browser** while handling large amount of rows in table.
 - Using **FullScreen Toggle** feature for both tabs (editor and result) saw major improvement in user experience. 
