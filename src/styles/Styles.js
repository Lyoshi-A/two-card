import styled from 'styled-components';

export const DeskStyles = styled.div`
  background-color: #01631a;
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 100px auto;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 5%;
  }

  .gameboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: white;
    min-height: 150px;
    width: 90%;
    border: 4px solid white;
    margin: 0 auto;

    & .hand {
      position: relative;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      margin: 10px;
      width: 90%;
      padding: 5px;
      border: 1px dashed #fcfbb7;
      height: clamp(140px, 50%, 210px);
    }

    & .caption-left {
      position: absolute;
      left: -50px;
      top: 45%;
      color: #fcfbb7;
      align-content: center;
      height: 20px;
      padding: 2px;
      transform-origin: center center;
      transform: rotate(-90deg) scale(2, 1);
    }

    & .caption-right {
      position: absolute;
      right: -50px;
      bottom: 45%;
      color: #fcfbb7;
      align-content: center;
      height: 20px;
      padding: 2px;
      transform-origin: center center;
      transform: rotate(90deg) scale(2, 1);
    }

    & .card {
      width: 90%;
      padding: 7px;
      border-radius: 10px;
    }
    & .selected0 {
      background-color: #9617ff;
    }
    & .selected1 {
      background-color: #9627ee;
    }
    & .selected2 {
      background-color: #2b37dd;
    }
    & .selected3 {
      background-color: #9647cc;
    }
    & .selected4 {
      background-color: #e257bb;
    }
    & .selected5 {
      background-color: #2b67aa;
    }
    & .selected6 {
      background-color: #967799;
    }
    & .selected7 {
      background-color: #e28788;
    }
    & .selected8 {
      background-color: #2b9777;
    }
    & .selected9 {
      background-color: #96a766;
    }
    & .selected10 {
      background-color: #e2b755;
    }
    & .selected11 {
      background-color: #2bc744;
    }
    & .selected12 {
      background-color: #2bd733;
    }
    & .selected13 {
      background-color: #2be722;
    }
  }

  .display {
    font-family: 'Orbitron', serif;
    margin: 0 !important;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }

    h3 {
      font-size: 2rem;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }

    p {
      text-align: center;
      color: white;
    }
  }

  .buttons-panel {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 700px;
    margin: 0 auto;
    max-height: 150px;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
    }

    &-numbers {
      padding: 20px 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    button {
      width: 70px;
      height: 40px;
      border-radius: 20px;
      border: 3px solid #fcfbb7;
      font-size: 1.5rem;
      color: #fcfbb7;
      font-family: 'Orbitron', serif;
      //background: #e17055;
      background-color: #01631a;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:hover {
        border: 4px solid white;
        font-weight: bold;
        color: white;
      }
    }

    button.start-game {
      height: 70px;
      border: 3px solid #fcfbb7;
      font-weight: bold;
      font-size: 2.5rem;
      color: #fcfbb7;
      background-color: #01631a;
      width: 700px;

      &:hover {
        border: 4px solid white;
        color: white;
      }
    }

    button.selected {
      border: 4px solid white;
      font-weight: bold;
      color: white;
      //background: #e15565;
    }
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr;
  border: 4px solid #fcfbb7;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  //background: #e17055;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }

  p {
    text-align: center;
    color: #fcfbb7;
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
`;
