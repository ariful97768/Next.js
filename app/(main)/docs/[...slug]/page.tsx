import React from 'react';

const Slug = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params
    if (slug.length === 2) {
        return (
            <div>
                viewing docs for feature {slug[0]} and concept {slug[1]}
            </div>
        )
    }
    if (slug.length === 1) {
        return (
            <div>
                viewing docs for feature {slug[0]}
            </div>
        )
    }
    return (
        <div>
            docs home page
        </div>
    );
};

export default Slug;