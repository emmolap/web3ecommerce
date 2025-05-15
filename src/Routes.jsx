import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage"; // Adjust the path as needed

<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
    {/* Other routes */}
  </Routes>
</Router>


import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

<Link to="/wishlist">
  <Icon as={Heart} boxSize={5} />
</Link>

<Button as={Link} to="/wishlist" leftIcon={<Heart />}>
  Wishlist
</Button>

import { useSelector } from "react-redux";

const wishlistCount = useSelector((state) => state.wishlist.items.length);

<Badge colorScheme="red">{wishlistCount}</Badge>
