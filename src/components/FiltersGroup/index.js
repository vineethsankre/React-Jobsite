import {BsSearch} from 'react-icons/bs'
import ProfileCard from '../ProfileCard'
import './index.css'
const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          value={searchInput}
        />
        <button
          type="button"
          className="search-button"
          data-testid="searchButton"
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="filter-container">
        <h1 className="filter-heading">Type of Employment</h1>
        <ul className="filter-type-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="filter-list-item"
                key={eachEmployeeType.employmentTypeId}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                  onChange={onSelectEmployeeType}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="filter-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="filter-container">
        <h1 className="filter-heading">Salary Range</h1>
        <ul className="filter-type-list-container">
          {salaryRangesList.map(eachFilter => {
            const {changeSalary} = props
            const onSelectSalary = () => {
              changeSalary(eachFilter.salaryRangeId)
            }
            return (
              <li className="filter-list-item" key={eachFilter.salaryRangeId}>
                <input
                  type="radio"
                  name="salary"
                  id={eachFilter.salaryRangeId}
                  className="check-input"
                  onChange={onSelectSalary}
                />
                <label
                  htmlFor={eachFilter.salaryRangeId}
                  className="filter-label"
                >
                  {eachFilter.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileCard />
      <hr className="hr-line" />
      {renderTypeOfEmployment()}
      <hr className="hr-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
