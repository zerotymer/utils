const NewsList = ({ category }) => {
    const [ loading, response, error ] = usePromise(() => {
        return axios.get(getUrl(category), );
    }, [ category]);


    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // 아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const { articles } = response.data;
    // response 값이 유효할 때
    return (
        <NewsListBlock>
            { articles.map(article => (
                <NewsItem key={ article.url } article={ article } />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;