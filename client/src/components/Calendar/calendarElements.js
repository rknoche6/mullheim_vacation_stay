import styled from "styled-components";

export const SectionDates = styled.section`
  
  .btn {
    background-color: #FFF;
    color: #FF7779;
    display: flex;
    flex: 1;
    font-weight: 900;
    width: 100%;
  }
  
  .search {
    left: 39.5rem;
    position: relative;
    height: 80vh;
    width: 55.8rem;
    
    &__title {
      align-items: center;
      background-color: white;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      width: 55.8rem;
    }
    
    &__input {
      border: none;
      padding: 2rem;
      width: 55.8rem;
    }
    
    &__button {
      background-color: #ff7779;
      color: white;
      width: 55.8rem;
      
      &:hover {
        background-color: #FFF;
        color: #FF7779;
      }
    }
  }
`;