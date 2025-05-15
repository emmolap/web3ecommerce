import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage"; // Adjust the path as needed

<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
    {/* Other routes */}
  </Routes>
</Router>
