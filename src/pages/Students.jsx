import { useEffect, useState } from "react";
import { User } from "../service/students";

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    jshshr: "",
    dob: "",
    address: "",
  });
  const [editId, setEditingId] = useState(null);

  const editItem = (item) => {
    setForm({
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      jshshr: item.jshshr,
      dob: item.dob,
      address: item.address,
    });
    setEditingId(item.id);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await User.getAll();
      setStudents(response);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      const res = await User.updateUser(form, editId);
      if (res?.status === 200) {
        const updated = await User.getAll();
        setStudents(updated);
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          jshshr: "",
          dob: "",
          address: "",
        });
        setEditingId(null);
      }
    } else {
      const res = await User.createUser(form);
      if (res?.status === 201) {
        const updated = await User.getAll();
        setStudents(updated);
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          jshshr: "",
          dob: "",
          address: "",
        });
      }
    }
  };

  const deleteItem = async (id) => {
    const res = await User.deleteUser(id);
    if (res.status === 200) {
      const res = await User.getAll();
      setStudents(res);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <form id="students" onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First name"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="jshshr"
              value={form.jshshr}
              onChange={handleChange}
              placeholder="JSHSHR"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              form="students"
            >
              {editId ? "Update" : "Save"}
            </button>
          </form>
        </div>

        <div className="md:col-span-2 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">JSHSHR</th>
                <th className="border px-4 py-2">DOB</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.first_name}</td>
                  <td className="border px-4 py-2">{item.last_name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.jshshr}</td>
                  <td className="border px-4 py-2">{item.dob}</td>
                  <td className="border px-4 py-2">{item.address}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
