import {alumni} from "../models/alumni.models.js"

const SearchAlumni = async (req, res) => {
    try {
        // Extract username from req.body and trim it
        const username = req.body.username?.trim() || '';  // Ensure trim to remove any accidental spaces
        console.log('Search query:', username);

        // Validate if the username is provided
        if (!username) {
            return res.status(400).json({ error: 'Query cannot be empty' });
        }

        // Search alumni by username (case-insensitive)
        const results = await alumni.find({ username: { $regex: username, $options: 'i' } });

        console.log('Results found:', results);

        // Check if results are empty
        if (results.length === 0) {
            return res.status(404).json({ message: 'No alumni found matching the query' });
        }

        // Send results back to the client
        res.status(200).json({ message: 'Alumni found', results });  // Wrap in an object for consistency
    } catch (error) {
        console.error('Error fetching results:', error);  // Log the full error
        res.status(500).json({ error: 'Error fetching results' });
    }
};



export {SearchAlumni}