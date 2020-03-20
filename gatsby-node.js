// query products and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {

    const result = await graphql(`
        query {
            allWordpressPage {
                edges {
                    node {
                        id
                        path
                        status
                        template
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        path
                        status
                        template
                        format
                    }
                }
            }
            allWcProducts {
                nodes {
                    id
                    name
                    type
                    sku
                    slug
                    regular_price
                    sale_price
                    on_sale
                    description
                    short_description
                    status
                    external_url
                    attributes {
                        id
                        name
                        visible
                        variation
                        options
                    }
                    product_variations {
                        id
                        description
                        sku
                        stock_status
                        regular_price
                        sale_price
                        on_sale
                    }
                    images {
                        src
                        name
                        alt
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 720) {
                                    base64
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('error loading products', result.errors);
    }

    // Create Page pages.
    const pages = result.data.allWordpressPage.edges;
	pages.forEach((edge) => {
        if (edge.status === 'publish') {
            actions.createPage({
                path: edge.node.path,
                component: require.resolve('./src/templates/page.js'),
                context: {
                    id: edge.node.id,
                },
            });
        }
    });

    // Create Post pages.
    const posts = result.data.allWordpressPost.edges;
	posts.forEach((edge) => {
        if (edge.status === 'publish') {
            actions.createPage({
                path: edge.node.path,
                component: require.resolve('./src/templates/post.js'),
                context: {
                    id: edge.node.id,
                },
            });
        }
    });
    

    const products = result.data.allWcProducts.nodes;
    products.forEach((product) => {
        if (product.status === 'publish') {
            const slug = product.slug;
            actions.createPage({
                path: slug,
                component: require.resolve('./src/templates/product.js'),
                context: {
                    product: product,
                },
            });
        }
    });

    actions.createPage({
        path: '/products',
        component: require.resolve('./src/pages/products.js'),
        context: {
            products: products
        }
    });

    // // Created paginated pages
    // const paginatedProducts = await graphql(`
    //     query {
    //         allWcProducts(limit: 6) {
    //             pageInfo {
    //                 currentPage
    //                 pageCount
    //             }
    //         }
    //     }
    // `);

    // const pageCount = paginatedProducts.data.allWcProducts.pageInfo.pageCount;
    // if (pageCount > 1) {
    //     await Promise.all(
    //         [...Array(pageCount)].map(async (u, i) => {
    //             const specificPaginatedProductsResult = await graphql(`
    //                 query {
    //                     allWcProducts(limit: 6, skip: ${6 * i}) {
    //                         nodes {
    //                             id
    //                             name
    //                             sku
    //                             slug
    //                             regular_price
    //                             sale_price
    //                             on_sale
    //                             short_description
    //                             status
    //                             images {
    //                                 src
    //                                 name
    //                                 alt
    //                                 localFile {
    //                                     childImageSharp {
    //                                         fluid(maxWidth: 720) {
    //                                             base64
    //                                             src
    //                                             srcSet
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                         pageInfo {
    //                             currentPage
    //                             pageCount
    //                         }
    //                     }
    //                 }
    //             `);
    //             if (specificPaginatedProductsResult.errors) {
    //                 reporter.panic('error loading products', specificPaginatedProductsResult.errors);
    //             }
    //             if (i === 0) {
    //                 actions.createPage({
    //                     path: `/products`,
    //                     component: require.resolve('./src/pages/products.js'),
    //                     context: {
    //                         currentPage: specificPaginatedProductsResult.data.allWcProducts.pageInfo.currentPage,
    //                         pageCount: specificPaginatedProductsResult.data.allWcProducts.pageInfo.pageCount,
    //                         products: specificPaginatedProductsResult.data.allWcProducts.nodes,
    //                     },
    //                 });
    //             } else {
    //                 actions.createPage({
    //                     path: `/products/${i + 1}`,
    //                     component: require.resolve('./src/pages/products.js'),
    //                     context: {
    //                         currentPage: specificPaginatedProductsResult.data.allWcProducts.pageInfo.currentPage,
    //                         pageCount: specificPaginatedProductsResult.data.allWcProducts.pageInfo.pageCount,
    //                         products: specificPaginatedProductsResult.data.allWcProducts.nodes,
    //                     },
    //                 });
    //             }
    //         }),
    //     );
    // } else {
    //     actions.createPage({
    //         path: '/products',
    //         component: require.resolve('./src/pages/products.js'),
    //     });
    // }
};