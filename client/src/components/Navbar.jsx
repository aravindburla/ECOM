import React from "react";
import {
  Wrapper,
  Container,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./navbarstyle";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ARAV.</Logo>
        </Center>
        <Right>
          <Link to='/register'>
          <MenuItem>Register</MenuItem>
          </Link>
          <Link to='/login'>
          <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
