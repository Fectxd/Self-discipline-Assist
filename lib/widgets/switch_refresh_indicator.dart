import 'package:flutter/material.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

/// Custom header that shows a compact "switch day" label for pull-down.
Widget buildSwitchRefreshHeader({required bool isTop, double opacity = 1.0}) {
  return CustomHeader(
    height: 60.0,
    builder: (BuildContext context, RefreshStatus? mode) {
      // 只在 canRefresh 和 refreshing 状态显示提示文本
      final bool shouldShow =
          (mode == RefreshStatus.canRefresh ||
          mode == RefreshStatus.refreshing);

      String text;
      switch (mode) {
        case RefreshStatus.canRefresh:
          text = isTop ? '松手切换到前一天' : '松手切换到后一天';
          break;
        case RefreshStatus.refreshing:
          text = isTop ? '正在切换到前一天..' : '正在切换到后一天..';
          break;
        default:
          text = '';
      }

      return SizedBox(
        height: 60,
        child: Center(
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 150),
            opacity: shouldShow ? 1.0 : 0.0,
            child: shouldShow
                ? Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.blue.shade600,
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.14),
                          blurRadius: 8,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Text(
                      text,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  )
                : const SizedBox.shrink(),
          ),
        ),
      );
    },
  );
}

/// Custom footer for pull-up (switch to next day)
Widget buildSwitchRefreshFooter({double opacity = 1.0}) {
  return CustomFooter(
    height: 60.0,
    loadStyle: LoadStyle.ShowWhenLoading,
    builder: (BuildContext context, LoadStatus? mode) {
      // 只在 canLoading 和 loading 状态显示提示文本
      final bool shouldShow =
          (mode == LoadStatus.canLoading || mode == LoadStatus.loading);

      String text;
      switch (mode) {
        case LoadStatus.canLoading:
          text = '松手切换到后一天';
          break;
        case LoadStatus.loading:
          text = '正在切换到后一天..';
          break;
        default:
          text = '';
      }

      return SizedBox(
        height: 60,
        child: Center(
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 150),
            opacity: shouldShow ? 1.0 : 0.0,
            child: shouldShow
                ? Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.blue.shade600,
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.14),
                          blurRadius: 8,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Text(
                      text,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  )
                : const SizedBox.shrink(),
          ),
        ),
      );
    },
  );
}
