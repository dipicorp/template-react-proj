import ArticleLayout from '../../components/layout/article-layout/article-layout';
// import style from './not-found.module.scss';


export const NotFound = () => {
  return (
    <ArticleLayout title="Not found">
      <div id="not-found"
        className="items-center justify-center h-full">
        <h1 className="page-title">404, not found</h1>
      </div>
    </ArticleLayout>
  );
};
