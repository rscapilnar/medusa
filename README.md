# Medusa Storefront Task

I have built a small storefront for Medusa merch, with the items seeded in the store backend. The design is minimalist, with a couple of bits of flair.

Have scaffolded a landing page, where I would have liked to show items that are part of a sale, in a Hero/Carousel component, had I had more time. The planned sale was a winter one, for the warmer clothing and the coffee mug!

The store page is a product grid, with a way to select categories at the top.

Have also provided a Contact route and page, but have not populated this yet.

The single product view page allows a user to see all the product images, select option combos to pick a product variant, select their desired quantity, then add it all to their cart. Currently the button does nothing :(

### To run

Would suggest running the store backend in the repo, as I've created 2 collections and assigned the items to them, for my implementation.

## Development Considerations

**Time spent**: Probably about 6 hours of active work

### High-level design notes

- **Config context** — a high-level context that currently retrieves all store regions and sets the first one as the active one. Provides a method to update the active region, but no UI has been implemented yet to do so.
- **Storefront context** — a context wrapping the store view, with the category selection and product grid. Keeps track of the desired collection and retrieves all products for the selected collection, or all products, and makes them available to the product list.
- **Product context** — wraps the product detail view. Provides the product currently being viewed, its unit price both as a formatted display and as a numerical value, keeps track of the active variant and the desired quantity. Wraps the image display, the product info, the variant builder, the quantity selector and the 'add to cart' button.

#### Some pitfalls of the approach

Because the same context queries the product and has to use the same product to compute other things (unit price, default variant), there are a few things like needed but ugly `| undefined`s on types and other such checks. This makes the Product context, for example, fairly clunky. I think refactoring this into something like redux, with the use of thunk and all, would make it all a bit cleaner, when not having to constantly account for React's lifecycle and rules of hooks. We could then even store the Product instance from the Product list, when clicked, rather than querying for it specifically again.

### Other considerations

The store is decently responsive, but could definitely do with a bit more tweaking. Tailwind is great for that, but still takes a lot of work. Speaking of Tailwind, I think there are some opportunities for more fully-fledged approaches when styling certain parts, whereas I've mostly stuck to the basics, as I've not properly worked with it before.

## Most challenging thing to tackle

By far the resolving of available options and building of variants. I first attempted a more fully-fledged approach here, by properly cross-referencing option and option value ids with the variants and building a tree of sorts, of what all is available, but have realised that, I believe, a fully-correct and feature-complete variant selector is a very hefty task. My solution is more naive: I resolve unique values for the options that are found on the product, populate the selects, then when an option is changed I find the corresponding product variant that matches all of the option values. This works for the seeded data, as it's nice, but it is not fully correct: there might not be combinations for all color and size options, for example.

I would be very keen to know if there's something in the SDK that I missed that would build this data structure for me, or a different approach that eluded me and would have made it easier.

## Most proud of

I am generally fairly proud of the way things like the product grid and product view are structured, with the caveat of the slightly messy context. I think the way it's modularized and speaking to and consuming that single source of truth via the context is neat and very extendable.

I'm also decently proud of the design. It's simple and clean, but interesting-enough.
