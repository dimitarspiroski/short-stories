import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface AppState {
    isDarkTheme: boolean;
}

const initialState: AppState = {
    isDarkTheme: true,
};

export const AppStore = signalStore(
    withState(initialState),
    withMethods((store) => ({
        setTheme(isDarkTheme: boolean) {
            patchState(store, { isDarkTheme });
        },
    }))
);
