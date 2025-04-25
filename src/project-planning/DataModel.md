# Data Model
## In our application (App) we have...
### A Menu/Box which holds an Array of Plant Objects: 
**Each Plant Object has**
- *Top and Side Images of Plant*
- Name/Species
- Light requirement
- Water requirment
- Soil requirment
- Bloom time (before bloom, during bloom)
- Bloom color
- Age of plant
- "Food for insects and birds"
    - I.e., does this plant provide food for insects/birds?
- Etc. (Other attributes that we may think of in the future)

See Mt Cuba website for plant list

### A Current Garden View (2D Top View)
Renders a garden object which stores the position of every plant & special feature on it. It also has
- A size (dimensions of garden)
- A shape? (If the shape is regular e.g. rectangle, circle, etc.)
    - If irregular shape, a drawing has been given
- Place on the screen where you're dragging/dropping plants
### An Array of Gardens?
That is updated when the user saves a garden design
## An Options Bar containing Controllers for the Garden Designer
- Button/Switch that toggles between Side and Top View of garden
- Save Button to save multiple versions of the garden
- New Button to draw a new garden


