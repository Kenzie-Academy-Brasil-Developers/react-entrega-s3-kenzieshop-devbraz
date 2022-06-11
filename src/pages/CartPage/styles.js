import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: var(--primary);

`
export const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: var(--primary);

  header {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 10%;
    width: 100vw;
    padding-left: 5%;
    padding-right: 5%;
    border-bottom: 1px solid var(--primary-negative);
    background: #FFFFFF;

    h2 {

      color: var(--primary);

    }

    div {

      display: flex;
      flex-direction: row;

    }

  }

  main {
    
    height: 90%;
    width: 100vw;
    padding: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
  }

`