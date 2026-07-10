export default async function ProductReview({
    params,
}: {
    params: Promise<{productId : string}>;
}) {
    const {productId} = await params
    return (
        <>
        <h1>product review for product:{productId}</h1>
        </>
    );

}