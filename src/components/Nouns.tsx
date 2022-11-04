import { INoun } from '../interfaces';
import { Noun } from './Noun';

interface IProps {
	nouns: INoun[];
	setNouns: any;
	localStorageVariable: string;
}

export const Nouns = (props: IProps) => {
	const { nouns, setNouns, localStorageVariable } = props;

	return (
		<div className="nouns">
			{nouns.map((noun: INoun) => {
				return <Noun nouns={nouns} setNouns={setNouns} localStorageVariable={localStorageVariable} noun={noun} key={noun.singular} />;
			})}
		</div>
	);
};
