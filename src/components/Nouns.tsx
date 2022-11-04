import { INoun } from '../interfaces';
import { Noun } from './Noun';

interface IProps {
	nouns: INoun[];
	setNouns: any;
}

export const Nouns = (props: IProps) => {
	const { nouns, setNouns } = props;

	return (
		<div className="nouns">
			{nouns.map((noun: INoun) => {
				return <Noun nouns={nouns} setNouns={setNouns} noun={noun} />;
			})}
		</div>
	);
};
