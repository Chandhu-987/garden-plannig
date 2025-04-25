/* Describes the amount of shade (i.e. amount of sun) required for plant care.
 * Values range from None (no shade/full sun) to Dense (Dense shade).
 * For more information on the categories, see the following site:
 * https://www.johnson.k-state.edu/lawn-garden/agent-articles/miscellaneous/defining-sun-requirements-for-plants.html
 */
export enum shadeLevel {
    None = "NONE",
    Light = "LIGHT",
    Partial = "PARTIAL",
    Full = "FULL",
    Dense = "DENSE"
}
