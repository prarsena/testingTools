import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    slowTestThreshold: 30000,
    projects: ['<rootDir>'],
    testEnvironment: "node",
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: ['/(?:production_)?node_modules/', '.d.ts$', 'const.ts'],
    transform: {
        '^.+\\.[jt]sx?$': 'ts-jest'
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    reporters: ["default"]
};

export default config;