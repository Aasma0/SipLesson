import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const AddProductComponent = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    productImage: null,
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/products/all");
      const products = response.data || [];
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/api/category/all");
        const categories = response.data.categories || [];
        setCategories(categories);

        if (categories.length > 0) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            category: categories[0]._id,
          }));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      productImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", formData.category);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("productImage", formData.productImage);

    try {
      if (isEditing) {
        const response = await axiosInstance.put(
          `/api/products/update/${editProductId}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.msg);
      } else {
        const response = await axiosInstance.post(
          "/api/products/create",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.msg);
      }

      setFormData({
        category: categories.length > 0 ? categories[0]._id : "",
        name: "",
        description: "",
        productImage: null,
      });
      setIsEditing(false);
      setEditProductId(null);

      await fetchProducts();
    } catch (error) {
      console.error("Error submitting product:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  const handleEdit = (product) => {
    setFormData({
      category: product.category,
      name: product.name,
      description: product.description,
      productImage: null,
    });
    setIsEditing(true);
    setEditProductId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/api/products/delete/${id}`);
      toast.success(response.data.msg);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex space-x-8">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 p-8 bg-white rounded-lg shadow-lg flex-grow"
        >
          <ToastContainer />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category:
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Image:
            </label>
            <input
              type="file"
              name="productImage"
              onChange={handleFileChange}
              required={!isEditing}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>

        {/* Product List */}
        <div className="w-1/2 bg-white rounded-lg shadow-lg flex-grow flex flex-col">
          <div className="overflow-y-auto flex-grow">
            {products.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          src={product.productImage} // Assuming `productImage` contains the URL of the product image
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {categories.find((cat) => cat._id === product.category)?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <AiFillEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="ml-4 text-red-600 hover:text-red-900"
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="p-4 text-gray-500">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductComponent;
