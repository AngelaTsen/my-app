export const BlogItem = ({title, body, userId}) => <div className="blog__div">
<h2>{userId}</h2> <h3>{title}</h3>
<div>{body}</div>
</div>
