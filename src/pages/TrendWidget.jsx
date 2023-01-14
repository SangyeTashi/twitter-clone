import { MoreHoriz } from '@mui/icons-material';

export default function TrendWidget({ title, description, category }) {
    return (
        <div className="flex cursor-pointer items-center justify-between py-3 px-5 last:rounded-b-2xl hover:bg-twittergreylight">
            <div>
                <div className="text-xs font-light text-gray-500 ">
                    {category}
                </div>
                <div className="text-sm font-bold ">{title}</div>
                <div className="text-xs font-light  text-gray-500">
                    Trending With{' '}
                    <span className="text-twitterPurpleLight hover:underline ">
                        <a href={`https://twitter.com/search?q=${description}`}>
                            {description}
                        </a>
                    </span>
                </div>
            </div>
            <div className="btn-primary">
                <MoreHoriz />
            </div>
        </div>
    );
}
