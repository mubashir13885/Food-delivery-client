import React, { useEffect, useState } from 'react';
import { userLogout, userProfile, userUpdate } from '../../services/userApi';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser, setUser } from '../../redux/features/userSlice';
import { persistor } from '../../redux/store';

function Profilepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const [editedProfile, setEditedProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    userProfile()
      .then((res) => {
        dispatch(setUser(res.data));
        setEditedProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        dispatch(clearUser());
        persistor.purge();
        toast.success('Logged out successfully');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await userUpdate(user._id, editedProfile);
      dispatch(setUser(res.data)); // update Redux state
      setIsEditing(false);
      toast.success('Profile updated');
    } catch (err) {
      console.log(err);
      toast.error('Update failed');
    }
  };

  return (
    <div>
      <div className="hero min-h-screen py-10 px-6">
        <div className="hero-content w-full flex-col lg:flex-row gap-10">

          {/* Profile Sidebar */}
          <div className="card w-full lg:w-1/3 bg-white shadow-lg">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="User Avatar"
                  />
                </div>
              </div>
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{user?.name}</h2>
              <p className="text-gray-500">{user?.email}</p>
              <div className="card-actions mt-4 flex gap-2">
                <button className="btn btn-outline btn-error btn-sm" onClick={handleLogout}>
                  Logout
                </button>
                {isEditing ? (
                  <button className="btn btn-outline btn-warning btn-sm" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                ) : (
                  <button className="btn btn-outline btn-success btn-sm" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="divider m-0"></div>
            <ul className="menu menu-vertical p-4 text-sm"></ul>
          </div>

          {/* Profile Form */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
                <form className="space-y-4" onSubmit={handleSave}>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      value={editedProfile.name || ''}
                      onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                      disabled={!isEditing}
                      className="input text-black bg-white border-black input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={editedProfile.email || ''}
                      onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                      disabled={!isEditing}
                      className="input text-black bg-white border-black input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      value={editedProfile.phoneNumber || ''}
                      onChange={(e) => setEditedProfile({ ...editedProfile, phoneNumber: e.target.value })}
                      disabled={!isEditing}
                      className="input text-black bg-white border-black input-bordered w-full"
                    />
                  </div>

                  {isEditing && (
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-error w-full">
                        Save Changes
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profilepage;
