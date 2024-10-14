import React, { useState } from 'react';
import "./Checkout.css";
import heart from "../../assets/heart.png";
import data from "../../data/config.json"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [showIdle, setShowIdle] = useState(false); 
  const [showOccasion, setShowOccasion] = useState(false); 
  const [showWork, setShowWork] = useState(false); 
  const [showFilters, setShowFilters] = useState(true); 

  // sorting and filtering logic
  const filterProducts = () => {
    let sorted = [...data]; 
    
    if (selectedCategories.length > 0) {
      sorted = sorted.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort products 
    switch (selectedOption) {
      case 'RECOMMENDED':
        return sorted.sort((a, b) => b.rating.count - a.rating.count); 
      case 'Newest first':
        return sorted; 
      case 'Popular':
        return sorted.sort((a, b) => b.rating.count - a.rating.count); 
      case 'Price: High to Low':
        return sorted.sort((a, b) => b.price - a.price); 
      case 'Price: Low to High':
        return sorted.sort((a, b) => a.price - b.price); 
      default:
        return sorted;
    }
  };

  // Handle category
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category] 
    );
  };

  const totalItems = filterProducts().length;

  return (
    <div className='checkoutContainer'>
      <div className='filterBar'>
        <div className='filterCount'>
          <p>ITEM {totalItems}</p>
          <h3 onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '< Hide Filter' : 'Show Filter >'}
          </h3>
        </div>
        <div className='optn'>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="Newest first">Newest first</option>
            <option value="Popular">Popular</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Price: Low to High">Price: Low to High</option>
          </select>
        </div>
        <div className='linesCheckout'></div>
      </div>

      <div className='mainContainer'>
        {showFilters && (
          <div className='filters'>

            <div className='filterSection'>
              <p onClick={() => setShowIdle(!showIdle)}>
              IDEAL FOR {showIdle ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </p>
              {showIdle && (
                <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="electronics"
                        onChange={() => handleCategoryChange("electronics")}
                      />
                      Electronics
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="jewelery"
                        onChange={() => handleCategoryChange("jewelery")}
                      />
                      Jewelery
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="women's clothing"
                        onChange={() => handleCategoryChange("women's clothing")}
                      />
                      Women's Clothing
                    </label>
                  </div>
                </div>
              )}
              <div className='line'></div>
            </div>

            <div className='filterSection'>
              <p onClick={() => setShowOccasion(!showOccasion)}>
                OCCASION {showIdle ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </p>
              {showOccasion && (
                <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="electronics"
                        onChange={() => handleCategoryChange("electronics")}
                      />
                      Electronics
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="jewelery"
                        onChange={() => handleCategoryChange("jewelery")}
                      />
                      Jewelery
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="women's clothing"
                        onChange={() => handleCategoryChange("women's clothing")}
                      />
                      Women's Clothing
                    </label>
                  </div>
                </div>
              )}
              <div className='line'></div>
            </div>

            <div className='filterSection'>
              <p onClick={() => setShowWork(!showWork)}>
                WORK {showIdle ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </p>
              {showWork && (
                <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="electronics"
                        onChange={() => handleCategoryChange("electronics")}
                      />
                      Electronics
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="jewelery"
                        onChange={() => handleCategoryChange("jewelery")}
                      />
                      Jewelery
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="women's clothing"
                        onChange={() => handleCategoryChange("women's clothing")}
                      />
                      Women's Clothing
                    </label>
                  </div>
                </div>
              )}
              <div className='line'></div>
            </div>
          </div>
        )}

        <div className={`products ${!showFilters ? 'fullWidth' : ''}`}>
          <div className='cards'>
            {filterProducts().map((product) => (
              <div key={product.id} className='card'>
                <img src={product.image} alt={product.title} className='cardImage' />
                <div className='description'>
                  <div>
                    <h3>{product.title}</h3>
                  </div>
                  <div className='sub'>
                    <p>Sign in or Create an account to see pricing</p>
                    <img src={heart} alt="heart" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Checkout;
