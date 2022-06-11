import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  min-width: 200px;
  max-width: 250px;
  height: 500px;
  background: #FFFFFF;
  border: 2px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 15px;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {

    width: auto;
    height: 300px;
    max-width: 200px;
    padding: 10px;

  }

  h3, h4 {

    margin: 1px;

  }

  h3 {

    font-size: 12px;
    color: var(--grey-3)

  }

  h4 {

    color: var(--grey-1)

  }

  div {

    min-width: 200px;
    max-width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    button {

      width: 100px;
      margin: 10px;
      
      :hover {

        transition: 0.5s all;
        background-color: var(--grey-0);
        color: black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

      }

    }

  }

`

export const RemoveContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  min-width: 400px;
  max-width: 500px;
  height: 300px;
  background: #FFFFFF;
  border: 2px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 15px;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {

    width: auto;
    height: 300px;
    max-width: 200px;
    padding: 10px;

  }

  div {

    h3, h4 {

      margin: 1px;

    }
  
    h3 {

      font-size: 12px;
      color: var(--grey-3)

    }
  
    h4 {

      color: var(--grey-1)

    }
  
    div {

      min-width: 200px;
      max-width: 250px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      button {

        width: 100px;
        margin: 10px;
        
        :hover {

          transition: 0.5s all;
          background-color: var(--grey-0);
          color: black;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

        }

      }

    }
    
  }

`



