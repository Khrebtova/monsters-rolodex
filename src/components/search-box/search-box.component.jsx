import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { handleSearch, placeholder, className } = this.props;

    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className={className}
          onChange={handleSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
