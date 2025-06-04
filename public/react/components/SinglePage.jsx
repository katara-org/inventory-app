import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiURL from "../api";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 25px;
  gap: 50px;
`;

const CardStyle = styled.div`
  background-color: lightgray;
  width: 70%;
  height: 105%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  box-shadow: 0px 0px 20px black;
  border-radius: 10px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: scale-down;
  background-color: white;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ImageAndInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex-flow: column nowrap;
`;

const TitleAndPart = styled.div`
  padding: 0px 0 5px 5px;
  width: 50%;
  height: 100px;
`;

const TitleFont = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

const PartFont = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

const QuantityNumber = styled.div`
  padding: 0px 0 5px 5px;
  width: 50%;
  height: 100%;
  border-left: 1px solid black;
`;

const Button = styled.div`
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  margin-top: 7px;
  border-radius: 15px;
  user-select: none;
  &:active {
    background-color: darkgray;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ hover }) => hover || "darkgray"};
    height: 55px;
    width: 210px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 100px;
  flex-flow: row nowrap;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

export default function SinglePage({ handleItemDeleted, handleItemUpdated }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(`${apiURL}/items/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
    fetchItem();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        handleItemDeleted(parseInt(id));
        alert(`Item ${id} deleted successfully`);
        navigate("/");
      } else {
        const data = await res.json();
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  if (!item) return <div>Loading item</div>;

  return (
    <>
      <Wrapper>
        <ImageAndInfo>
          {" "}
          {/* This is first element in the column*/}
          <CardStyle>
            {" "}
            {/* This is the card with image and name + part*/}
            <ItemImage src={item.image} alt={item.title} />
            <TitleAndPart>
              {" "}
              {/*This is for info under the picture*/}
              <TitleFont>{item.name}</TitleFont>
              <PartFont>Part #{item.id}</PartFont>
            </TitleAndPart>
          </CardStyle>
          <InfoWrapper>
            {" "}
            {/* This is for info on the right side of the image*/}
            <h1>${item.price}</h1>
            <h4>Amount in stock: 10</h4>
            <Button>Add to cart</Button>
          </InfoWrapper>
        </ImageAndInfo>

        <CardStyle>
          {" "}
          {/* This is the card with description and categories*/}
          <p>{item.description}</p> <br />
          <p>
            <strong>Item Updated at : </strong> {item.updatedAt}{" "}
          </p>{" "}
          <br />
          <p>
            <strong>Categories:</strong>
            <br /> {item.category}
          </p>
        </CardStyle>

        <ButtonWrapper>
          <StyledLink to={`/`}>
            <Button>Back to List</Button>
          </StyledLink>
          <StyledLink to='/edit-item'> 
            <Button>Edit Item</Button>
          </StyledLink>
          <Button onClick={handleDelete}>Delete Item</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
