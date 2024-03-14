import React from 'react';
import ReactDOM from 'react-dom';
const BreadCrumbItem = ({ href, isCurrent, children }) => {
    return (
      <li>
        <a href={href} aria-current={isCurrent ? 'page' : undefined}>{children}</a>
      </li>
    )
};

const App = () => {
  return (
    <div>
      <h2>Breadcrumbs</h2>
      <BreadCrumbItem href="/">Home</BreadCrumbItem>
      <BreadCrumbItem href='/kitchen'>Furniture</BreadCrumbItem>
      <BreadCrumbItem href='/kitchen/glassware'>Living Room</BreadCrumbItem>
      <BreadCrumbItem href='/kitchen/glassware/speciality_glassware' isCurrent={true}>Sofas</BreadCrumbItem>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById("app"));