import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

interface INoun {
	article: string;
	singular: string;
	plural: string;
}

const nounsUrl = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
	const [nouns, setNouns] = useState<INoun[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(nounsUrl);
			const _nouns = response.data;
			setNouns(_nouns);
		})();
	}, []);

	return (
		<div className="App">
			<h1>German Noun Site</h1>
			<p>There are {nouns.length} nouns.</p>
			<div className="nouns">
				{nouns.map((noun) => {
					return (
						<div className="noun" key={noun.singular}>
							<div className="front">{noun.singular}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
