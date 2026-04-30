"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoPeopleOutline, IoSearchOutline, IoTrashOutline, 
  IoCreateOutline, IoShieldCheckmarkOutline,
  IoPersonCircleOutline, IoCloseOutline
} from "react-icons/io5";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Shefaul Islam", email: "shefaul@agriflow.com", role: "Admin", status: "Active" },
    { id: 2, name: "Rahat Khan", email: "rahat@farm.com", role: "Farmer", status: "Active" },
    { id: 3, name: "Anika Ahmed", email: "anika@buyer.com", role: "Buyer", status: "Pending" },
    { id: 4, name: "Karim Uddin", email: "karim@agri.com", role: "Farmer", status: "Active" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null); // এডিট করার জন্য স্টেট

  // সার্চ লজিক
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (id) => {
    if(window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    
    setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...updatedData } : u));
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-10 text-gray-600 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Search Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black flex items-center justify-center md:justify-start gap-3 text-green-600">
              <IoPeopleOutline className="animate-pulse" /> User Directory
            </h1>
            <p className="mt-2 font-medium text-gray-400">Manage AgriFlow ecosystem members.</p>
          </div>

          <div className="relative group">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..." 
              className="pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl w-full md:w-80 outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition-all font-medium"
            />
          </div>
        </div>

        {/* Table Content */}
        <motion.div layout className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">User Profile</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Role</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <AnimatePresence>
                  {filteredUsers.map((user) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      key={user.id} 
                      className="hover:bg-green-50/30 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600"><IoPersonCircleOutline size={30} /></div>
                          <div>
                            <h4 className="font-bold text-gray-800">{user.name}</h4>
                            <p className="text-xs font-medium text-gray-400">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200">{user.role}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => setEditingUser(user)} className="p-2 hover:bg-white rounded-xl hover:text-green-600 transition-all border border-transparent hover:border-gray-100"><IoCreateOutline size={20} /></button>
                          <button onClick={() => deleteUser(user.id)} className="p-2 hover:bg-rose-50 rounded-xl text-gray-400 hover:text-rose-600 transition-all"><IoTrashOutline size={20} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* --- Edit User Modal --- */}
      <AnimatePresence>
        {editingUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setEditingUser(null)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-gray-800">Edit User</h3>
                <button onClick={() => setEditingUser(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><IoCloseOutline size={24} /></button>
              </div>

              <form onSubmit={handleUpdateUser} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input name="name" defaultValue={editingUser.name} required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">User Role</label>
                  <select name="role" defaultValue={editingUser.role} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500 font-bold cursor-pointer">
                    <option>Admin</option>
                    <option>Farmer</option>
                    <option>Delivery Partner</option>
                    <option>Buyer</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-200 hover:bg-green-700 transition-all active:scale-95">Update Permissions</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageUsers;