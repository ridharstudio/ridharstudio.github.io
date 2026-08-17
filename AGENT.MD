# Agent Workflow

## Required verification

After completing an implementation feature or making a functional change, always run these commands in order:

```bash
npm run check
npm run build
```

Do not report the implementation as complete if either command fails. Fix the failure, then rerun both commands until they pass.

In the final handoff, state whether both checks passed and mention any verification that could not be run.
