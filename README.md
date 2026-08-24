# Jimmy AI Lab Dashboard

Zero-cost product operating dashboard for the private Jimmy AI Lab methodology.

## Current capabilities
- Product idea intake
- 10-factor opportunity scoring
- GO / TEST / HOLD / NO-GO recommendations
- Product stage pipeline from Idea through Scale
- Product workspaces for competitors, architecture, security, MVP, pricing, evaluation, validation, decision notes, notes, and next action
- Local browser storage with JSON backup and restore
- Phase 18 ChatGPT Bridge with multiple analysis request types
- Structured JSON validation and import back into the product record

## Data model
The public dashboard does not contain private AI Lab knowledge, secrets, API keys, or client data. Product information is stored locally in the user's browser unless exported manually.

## Phase 18 workflow
1. Create or open a product.
2. Choose a ChatGPT Bridge analysis type.
3. Copy the structured request into the Jimmy AI Lab ChatGPT project.
4. Run the request using the private methodology and current research.
5. Paste the returned JSON into the dashboard.
6. Validate and import the result into the product workspace.

## Safety rule
Imported bridge content is treated as text/data only. Unknown JSON fields are ignored and no imported code is executed automatically.
