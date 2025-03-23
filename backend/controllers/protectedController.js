import User from "../models/userModel.js";
export const protectedRoute = (req, res) => {
    const items = [
        { id: 1, name: 'Item A', description: 'Description A', value: 10 },
        { id: 2, name: 'Item B', description: 'Description B', value: 20 },
        { id: 3, name: 'Item C', description: 'Description C', value: 30 },
        { id: 4, name: 'Item D', description: 'Description D', value: 40 },
        // Add more items as needed
    ];

    res.status(200).json({ message: 'This is a protected route', data: items });
};


export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Get user details

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};